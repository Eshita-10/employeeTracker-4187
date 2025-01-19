
import express from "express";
import { getProductivityInsights, getTeamPerformanceTrends, generateReport } from "../controllers/dashboardController.js";
const router = express.Router();
router.get("/productivity-insights", getProductivityInsights);
router.get("/team-performance-trends", getTeamPerformanceTrends);
router.get("/generate-report", generateReport);
export default router;
