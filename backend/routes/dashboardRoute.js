//routes/dashboardRoute.js

import express from "express";
import { getProductivityInsights, 
    getTeamPerformanceTrends, 
    generateReport }
     from "../controllers/dashboardController.js";

const router = express.Router();

// Route to get Productivity Insights
router.get("/productivity-insights", getProductivityInsights);

// Route to get Team Performance Trends
router.get("/team-performance-trends", getTeamPerformanceTrends);

// Route to generate Weekly/Monthly Reports
router.get("/generate-report", generateReport);

export default router;
