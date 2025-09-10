import { Router } from 'express';
import AgainstBot from '../controllers/AgainstBot';

const app =Router();

app.get("/" , AgainstBot)