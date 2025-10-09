import React from "react";
import Layout from "./Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 leading-relaxed">
        <h2 className="text-3xl font-bold text-primary mb-6">About CecGrid</h2>
        <p className="mb-4">
          CecGrid is an intelligent seating arrangement system developed for
          the College of Engineering Chengannur. It is designed to simplify and
          automate the process of allocating seats during examinations,
          ensuring fairness, efficiency, and ease of management.
        </p>
        <p className="mb-4">
          Traditionally, arranging seating plans for students during exams has
          been a time-consuming and error-prone task. CecGrid solves this by
          allowing faculty to generate seating layouts quickly, manage student
          details, and allocate faculty supervisors with just a few clicks.
        </p>
        <p className="mb-4">
          This platform is built with modern web technologies, providing a
          user-friendly interface and seamless navigation between different
          sections. It ensures that administrators and faculty can perform
          their tasks with minimal training and maximum efficiency.
        </p>

        <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">
          Key Features
        </h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Generate exam seating arrangements instantly.</li>
          <li>Maintain a history of previous arrangements for reference.</li>
          <li>Manage student details in an organized manner.</li>
          <li>Allocate faculty supervisors efficiently.</li>
          <li>Responsive design for use on laptops, tablets, and phones.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">
          Our Mission
        </h3>
        <p className="mb-4">
          The mission of CecGrid is to modernize and streamline the examination
          seating process, reducing manual effort and allowing faculty to focus
          more on academic responsibilities rather than administrative burdens.
        </p>
      </div>
    </Layout>
  );
};

export default About;

