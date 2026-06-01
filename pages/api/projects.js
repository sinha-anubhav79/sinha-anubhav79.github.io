import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public', 'assets', 'images', 'projects');
const dataFile = path.join(process.cwd(), 'data', 'projects.json');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, uploadDir);
  },
  filename: function (_, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  },
});

const upload = multer({ storage });

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { id, category } = req.query;
    if (fs.existsSync(dataFile)) {
      const raw = fs.readFileSync(dataFile, 'utf-8');
      const data = JSON.parse(raw);
      if (id && category) {
        if (data[category]) {
          const item = data[category].find(e => e.id.toString() === id);
          if (item) return res.status(200).json(item);
        }
        return res.status(404).json({ error: 'Not found' });
      }
      return res.status(200).json(data);
    }
    return res.status(200).json({ webDevelopment: [], appDevelopment: [], designWork: [] });
  }

  if (req.method === 'DELETE') {
    const { id, category } = req.query;
    if (!id || !category) return res.status(400).json({ error: 'ID and category are required' });

    if (fs.existsSync(dataFile)) {
      const raw = fs.readFileSync(dataFile, 'utf-8');
      let data = JSON.parse(raw);
      if (data[category]) {
        data[category] = data[category].filter(e => e.id.toString() !== id);
        fs.writeFileSync(dataFile, JSON.stringify(data, null, 4));
        return res.status(200).json({ message: 'Deleted successfully' });
      }
    }
    return res.status(404).json({ error: 'Data file or category not found' });
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    upload.single('image')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Upload failed' });
      }

      try {
        const body = req.body;
        const file = req.file;

        const category = body.projectCategory;
        if (!category) {
          return res.status(400).json({ error: 'Project Category is required' });
        }

        let existingData = {
          webDevelopment: [],
          appDevelopment: [],
          designWork: []
        };

        if (fs.existsSync(dataFile)) {
          const raw = fs.readFileSync(dataFile, 'utf-8');
          existingData = JSON.parse(raw);
        }

        if (!existingData[category]) {
          existingData[category] = [];
        }

        if (req.method === 'POST') {
          let maxId = 0;
          Object.keys(existingData).forEach(cat => {
            existingData[cat].forEach(proj => {
              const num = parseInt(proj.id);
              if (!isNaN(num) && num > maxId) {
                maxId = num;
              }
            });
          });
          const nextIdString = (maxId + 1).toString().padStart(3, '0');

          const newProject = {
            id: nextIdString,
            title: body.title,
            summary: body.summary,
            description: body.description,
            link: body.link || undefined,
            repository: body.repository || undefined,
            image: file ? `/assets/images/projects/${file.filename}` : '',
          };

          Object.keys(newProject).forEach(key => newProject[key] === undefined && delete newProject[key]);
          existingData[category].push(newProject);
          fs.writeFileSync(dataFile, JSON.stringify(existingData, null, 4));
          return res.status(200).json({ message: 'Project saved', newProject });
        } else if (req.method === 'PUT') {
          const { id } = req.query;
          const index = existingData[category].findIndex(e => e.id.toString() === id);
          if (index === -1) return res.status(404).json({ error: 'Not found' });

          const updatedProject = {
            ...existingData[category][index],
            title: body.title,
            summary: body.summary,
            description: body.description,
            link: body.link || undefined,
            repository: body.repository || undefined,
          };

          if (file) {
            updatedProject.image = `/assets/images/projects/${file.filename}`;
          }

          Object.keys(updatedProject).forEach(key => updatedProject[key] === undefined && delete updatedProject[key]);
          existingData[category][index] = updatedProject;
          fs.writeFileSync(dataFile, JSON.stringify(existingData, null, 4));
          return res.status(200).json({ message: 'Project updated', updatedProject });
        }
      } catch (error) {
        console.error('Save error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else {
    if (req.method !== 'GET' && req.method !== 'DELETE') {
      res.status(405).end('Method Not Allowed');
    }
  }
};

export default handler;
