// src/pages/CreateUser.jsx
import MainLayout from '../components/layout/MainLayout';
import Button from '../components/common/Button';

export default function CreateUser() {
    return (
        <MainLayout>
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Create user account</h1>
                <p className="text-gray-500 mb-6">Fill in the details to create a new user account.</p>

                <div className="bg-white p-8 rounded-lg shadow">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Username</label>
                            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., mthuy.04" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Role</label>
                            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Select a role</option>
                                <option>Doctor</option>
                                <option>Patient</option>
                                <option>Admin</option>
                            </select>
                        </div>
                        <Button>Create Account</Button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}