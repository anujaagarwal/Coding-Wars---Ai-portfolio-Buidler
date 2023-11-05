import React, { useState } from "react";

export default function Portfolio() {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [experienceEntries, setExperienceEntries] = useState([
    { jobTitle: "", companyName: "" },
  ]);

  const [educationEntries, setEducationEntries] = useState({
    institution: "",
    graduationYear: "",
  });
  const [skills, setSkills] = useState([]);
  const [customization, setCustomization] = useState({
    primaryColor: "",
    secondaryColor: "",
    imageURL: "",
    buttonSize: "",
  });

  const handleExperienceChange = (index, key, value) => {
    const updatedEntries = [...experienceEntries];
    updatedEntries[index][key] = value;
    setExperienceEntries(updatedEntries);
  };

  const addExperienceEntry = () => {
    setExperienceEntries([
      ...experienceEntries,
      { jobTitle: "", companyName: "" },
    ]);
  };

  const handleEducationChange = (index, key, value) => {
    const updatedEntries = [...educationEntries];
    updatedEntries[index][key] = value;
    setEducationEntries(updatedEntries);
  };

  const addEducationEntry = () => {
    setEducationEntries([
      ...educationEntries,
      { institution: "", graduationYear: "" },
    ]);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value.split(",").map((skill) => skill.trim()));
  };

  const handleCustomizationChange = (key, value) => {
    setCustomization({ ...customization, [key]: value });
  };

  return (
    <div className="left-part bg-gray-100 p-4">
      <div className="section mb-8">
        <h2 className="text-2xl font-semibold mb-2">Template Selection</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedTemplate("Professional")}
            className={`template-button ${
              selectedTemplate === "Professional" && "selected"
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setSelectedTemplate("Creative")}
            className={`template-button ${
              selectedTemplate === "Creative" && "selected"
            }`}
          >
            Creative
          </button>
          <button
            onClick={() => setSelectedTemplate("Academic")}
            className={`template-button ${
              selectedTemplate === "Academic" && "selected"
            }`}
          >
            Academic
          </button>
        </div>
      </div>

      <div className="section mb-8">
        <h2 className="text-2xl font-semibold mb-2">Information Input</h2>
        <div className="experience-entries">
          {experienceEntries?.map((entry, index) => (
            <div key={index} className="mb-4">
              <label className="block text-lg font-semibold mb-1">
                Job Title:
              </label>
              <input
                type="text"
                value={entry.jobTitle}
                onChange={(e) =>
                  handleExperienceChange(index, "jobTitle", e.target.value)
                }
                className="w-full border border-gray-300 rounded p-2"
              />
              <label className="block text-lg font-semibold mt-2 mb-1">
                Company Name:
              </label>
              <input
                type="text"
                value={entry.companyName}
                onChange={(e) =>
                  handleExperienceChange(index, "companyName", e.target.value)
                }
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          ))}
          <button
            onClick={addExperienceEntry}
            className="btn bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Add Experience Entry
          </button>
        </div>

        {/* Education input and skills input sections */}
        {/* Implement similar structures for education and skills */}
      </div>

      <div className="section mb-8">
        <h2 className="text-2xl font-semibold mb-2">Template Customization</h2>
        <div className="customization-options">
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">
              Primary Color:
            </label>
            <input
              type="text"
              value={customization.primaryColor}
              onChange={(e) =>
                handleCustomizationChange("primaryColor", e.target.value)
              }
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">
              Secondary Color:
            </label>
            <input
              type="text"
              value={customization.secondaryColor}
              onChange={(e) =>
                handleCustomizationChange("secondaryColor", e.target.value)
              }
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-1">
              Image URL (optional):
            </label>
            <input
              type="text"
              value={customization.imageURL}
              onChange={(e) =>
                handleCustomizationChange("imageURL", e.target.value)
              }
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-1">
              Button Size:
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => handleCustomizationChange("buttonSize", "xl")}
                className={`btn ${
                  customization.buttonSize === "xl"
                    ? "bg-blue-500"
                    : "bg-gray-300"
                } text-white px-3 py-1 rounded hover:bg-blue-600`}
              >
                XL
              </button>
              <button
                onClick={() => handleCustomizationChange("buttonSize", "sm")}
                className={`btn ${
                  customization.buttonSize === "sm"
                    ? "bg-blue-500"
                    : "bg-gray-300"
                } text-white px-3 py-1 rounded hover:bg-blue-600`}
              >
                SM
              </button>
              <button
                onClick={() => handleCustomizationChange("buttonSize", "l")}
                className={`btn ${
                  customization.buttonSize === "l"
                    ? "bg-blue-500"
                    : "bg-gray-300"
                } text-white px-3 py-1 rounded hover:bg-blue-600`}
              >
                L
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary">Generate Portfolio</button>
    </div>
  );
}
