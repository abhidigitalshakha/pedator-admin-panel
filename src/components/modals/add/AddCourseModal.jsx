import React, { useState } from "react";

const AddCourseModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categoryId: "",
    subCategoryId: "",
    educatorId: "",
    price: "",
    priceType: "Fixed",
    status: true,
    coverImage: null,
    images: [],
    faqs: [],
    isCourseApproved: false,
    keyHighlightPoints: "",
  });

  const [faqList, setFaqList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, isMultiple) => {
    if (!e.target.files) return;
    if (isMultiple) {
      setFormData({ ...formData, images: [...e.target.files] });
    } else {
      setFormData({ ...formData, coverImage: e.target.files[0] });
    }
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...faqList];
    updatedFaqs[index][field] = value;
    setFaqList(updatedFaqs);
  };

  const addFaq = () => {
    setFaqList([...faqList, { question: "", answer: "" }]);
  };

  const removeFaq = (index) => {
    setFaqList(faqList.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, faqs: JSON.stringify(faqList) });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl relative">
        <h2 className="text-2xl font-bold mb-4 text-[#108e88]">
          Add New Course
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 absolute top-4 right-5 bg-red-500 text-white rounded"
        >
          X
        </button>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-8 gap-4">
          {/* Title */}
          <div>
            <p className="pb-2 text-gray-700">Course Title</p>
            <input
              type="text"
              name="title"
              placeholder="Course Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Description */}
          <div>
            <p className="pb-2 text-gray-700">Description</p>
            <textarea
              rows={1}
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Category & Subcategory */}
          <div>
            <p className="pb-2 text-gray-700">Category</p>
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
            >
              <option value="">Select Category</option>
              <option value="cat1">Category 1</option>
            </select>
          </div>
          <div>
            <p className="pb-2 text-gray-700">Subcategory</p>
            <select
              name="subCategoryId"
              value={formData.subCategoryId}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
            >
              <option value="">Select Subcategory</option>
              <option value="subcat1">Subcategory 1</option>
            </select>
          </div>

          {/* Educator */}
          <div>
            <p className="pb-2 text-gray-700">Educator</p>
            <select
              name="educatorId"
              value={formData.educatorId}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
            >
              <option value="">Select Educator</option>
              <option value="educator1">Educator 1</option>
            </select>
          </div>

          {/* Price & Price Type */}
          <div>
          <p className="pb-2 text-gray-700">Price</p>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>
          <div>
          <p className="pb-2 text-gray-700">Price Type</p>
            <select
              name="priceType"
              value={formData.priceType}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
            >
              <option value="Fixed">Fixed</option>
              <option value="Discounted">Discounted</option>
            </select>
          </div>

          {/* Cover Image Upload */}
          <div>
          <p className="pb-2 text-gray-700">Cover Image Upload</p>
            <input
              type="file"
              placeholder="Cover File Upload"
              onChange={(e) => handleFileChange(e, false)}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
            />
          </div>

          {/* Multiple Images Upload */}
          <div>
          <p className="pb-2 text-gray-700">Multiple Images Upload</p>
            <input
              type="file"
              multiple
              placeholder="Multiple File Upload"
              onChange={(e) => handleFileChange(e, true)}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
            />
          </div>

          {/* Key Highlights */}
          <div>
          <p className="pb-2 text-gray-700">Key Highlights</p>
            <input
              type="text"
              name="keyHighlightPoints"
              placeholder="Key Highlights"
              value={formData.keyHighlightPoints}
              onChange={handleChange}
              className="w-full p-2 border rounded border-gray-400 text-gray-700"
              required
            />
          </div>

          {/* Status Toggle */}
          <div className="flex justify-start items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.status}
                onChange={() =>
                  setFormData({ ...formData, status: !formData.status })
                }
              />
              <span>{formData.status ? "Active" : "Inactive"}</span>
            </label>
          </div>

          {/* FAQs Section */}
          <div className="space-y-2">
            <div className="flex justify-between items-center border border-gray-400 pl-2 rounded">
              <h3 className="text-lg font-semibold text-gray-600">FAQs</h3>
              <button
                type="button"
                onClick={addFaq}
                className="bg-[#108e88] text-white border border-white px-2 py-2 rounded font-semibold"
              >
                Add FAQ
              </button>
            </div>
            {faqList.map((faq, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Question"
                  value={faq.question}
                  onChange={(e) =>
                    handleFaqChange(index, "question", e.target.value)
                  }
                  className="w-full p-2 border rounded border-gray-400 text-gray-700"
                />
                <input
                  type="text"
                  placeholder="Answer"
                  value={faq.answer}
                  onChange={(e) =>
                    handleFaqChange(index, "answer", e.target.value)
                  }
                  className="w-full p-2 border rounded border-gray-400 text-gray-700"
                />
                <button
                  type="button"
                  onClick={() => removeFaq(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex">
            <button
              type="submit"
              className="px-4 py-2 bg-[#108e88] text-white rounded"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourseModal;
