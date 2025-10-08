// src/pages/DepartmentFormPage.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const mockDepartmentData = {
  'dept1': { name: 'Cardiology', head: 'Dr. Emily Carter', description: 'Focuses on heart-related issues.' },
  'dept2': { name: 'Neurology', head: 'Dr. David Lee', description: 'Deals with disorders of the nervous system.' },
  'dept3': { name: 'Pediatrics', head: 'Dr. Sarah Jones', description: 'Medical care of infants, children, and adolescents.' },
};

export default function DepartmentFormPage() {
  const { departmentId } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(departmentId);

  const [name, setName] = useState('');
  const [head, setHead] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isEditing && mockDepartmentData[departmentId]) {
      const dept = mockDepartmentData[departmentId];
      setName(dept.name);
      setHead(dept.head);
      setDescription(dept.description);
    }
  }, [isEditing, departmentId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, head, description };

    console.log("Submitting form data:", formData);
    
    alert(isEditing ? `Department ${name} updated!` : `Department ${name} created!`);
    navigate('/departments');
};

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {isEditing ? 'Edit Department' : 'Add New Department'}
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <Input label="Department Name" value={name} onChange={e => setName(e.target.value)} required />
            <Input label="Head of Department" value={head} onChange={e => setHead(e.target.value)} required />
            
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Description</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mt-6">
              <Button type="submit">{isEditing ? 'Save Changes' : 'Create Department'}</Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}