import React, { useState } from "react";
import { courses } from "../CourseData";
import "./CourseList.css";

const CourseList = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const categories = [...new Set(courses.map((course) => course.category))];
  const levels = [...new Set(courses.map((course) => course.level))];

  const filteredCourses = courses.filter((course) => {
    return (
      (selectedCategory === "" || course.category === selectedCategory) &&
      (selectedLevel === "" || course.level === selectedLevel)
    );
  });

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedLevel("");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Our Courses</h2>

      {/* Filters */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <label className="filter-label">Category</label>
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="filter-label">Difficulty Level</label>
          <select
            className="form-select"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="">All</option>
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 d-flex align-items-end">
          <button onClick={clearFilters} className="btn btn-clear w-100">
            Clear Filters
          </button>
        </div>
      </div>

      {/* Course Count */}
      <p className="mb-3 fw-semibold text-secondary">
        Showing {filteredCourses.length} courses
      </p>

      {/* Course Cards */}
      <div className="row">
        {filteredCourses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text mb-1">
                  <strong>Category:</strong> {course.category}
                </p>
                <p className="card-text mb-1">
                  <strong>Level:</strong> {course.level}
                </p>
                <p className="card-text mb-0">
                  <strong>Instructor:</strong> {course.instructor}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
