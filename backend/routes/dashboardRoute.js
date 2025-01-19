import express from "express";
import {
  getProductivityInsights,
  getTeamPerformanceTrends,
  generateReport,
} from "../controllers/dashboardController.js";
const dashboardRoute = express.Router();
dashboardRoute.get("/productivity-insights", getProductivityInsights);
dashboardRoute.get("/team-performance-trends", getTeamPerformanceTrends);
dashboardRoute.get("/generate-report", generateReport);
export default dashboardRoute;
