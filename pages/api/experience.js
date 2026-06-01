import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public', 'assets', 'images', 'institutions');
const dataFile = path.join(process.cwd(), 'data', 'experience.json');

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
    const { id } = req.query;
    if (fs.existsSync(dataFile)) {
      const raw = fs.readFileSync(dataFile, 'utf-8');
      const data = JSON.parse(raw);
      if (id) {
        const item = data.find(e => e.id.toString() === id);
        return item ? res.status(200).json(item) : res.status(404).json({ error: 'Not found' });
      }
      return res.status(200).json(data);
    }
    return res.status(200).json([]);
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'ID is required' });

    if (fs.existsSync(dataFile)) {
      const raw = fs.readFileSync(dataFile, 'utf-8');
      let data = JSON.parse(raw);
      const newData = data.filter(e => e.id.toString() !== id);
      fs.writeFileSync(dataFile, JSON.stringify(newData, null, 4));
      return res.status(200).json({ message: 'Deleted successfully' });
    }
    return res.status(404).json({ error: 'Data file not found' });
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    upload.single('src')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Upload failed' });
      }

      try {
        const body = req.body;
        const file = req.file;
        let existingData = [];

        if (fs.existsSync(dataFile)) {
          const raw = fs.readFileSync(dataFile, 'utf-8');
          existingData = JSON.parse(raw);
        }

        if (req.method === 'POST') {
          const nextId = existingData.length > 0 ? Math.max(...existingData.map(e => parseInt(e.id) || 0)) + 1 : 1;
          const newExperience = {
            id: nextId,
            experienceType: body.experienceType,
            type: body.type || undefined,
            category: body.category || undefined,
            level: body.level || undefined,
            OrganisationName: body.OrganisationName,
            designation: body.designation,
            startMonth: parseInt(body.startMonth),
            startYear: parseInt(body.startYear),
            endMonth: isNaN(parseInt(body.endMonth)) ? null : parseInt(body.endMonth),
            endYear: isNaN(parseInt(body.endYear)) ? null : parseInt(body.endYear),
            summary: body.summary,
            description: body.description,
            src: file ? `/assets/images/institutions/${file.filename}` : '',
          };

          Object.keys(newExperience).forEach(key => newExperience[key] === undefined && delete newExperience[key]);
          existingData.push(newExperience);
          fs.writeFileSync(dataFile, JSON.stringify(existingData, null, 4));
          return res.status(200).json({ message: 'Experience saved', newExperience });

        } else if (req.method === 'PUT') {
          const { id } = req.query;
          const index = existingData.findIndex(e => e.id.toString() === id);
          if (index === -1) return res.status(404).json({ error: 'Not found' });

          const updatedExperience = {
            ...existingData[index],
            experienceType: body.experienceType,
            type: body.type || undefined,
            category: body.category || undefined,
            level: body.level || undefined,
            OrganisationName: body.OrganisationName,
            designation: body.designation,
            startMonth: parseInt(body.startMonth),
            startYear: parseInt(body.startYear),
            endMonth: isNaN(parseInt(body.endMonth)) ? null : parseInt(body.endMonth),
            endYear: isNaN(parseInt(body.endYear)) ? null : parseInt(body.endYear),
            summary: body.summary,
            description: body.description,
          };
          
          if (file) {
            updatedExperience.src = `/assets/images/institutions/${file.filename}`;
          }

          Object.keys(updatedExperience).forEach(key => updatedExperience[key] === undefined && delete updatedExperience[key]);
          existingData[index] = updatedExperience;
          fs.writeFileSync(dataFile, JSON.stringify(existingData, null, 4));
          return res.status(200).json({ message: 'Experience updated', updatedExperience });
        }
      } catch (error) {
        console.error('Save error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } else {
    // Other methods
    if (req.method !== 'GET' && req.method !== 'DELETE') {
        res.status(405).end('Method Not Allowed');
    }
  }
};

export default handler;
