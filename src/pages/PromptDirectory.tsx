import React from 'react';
import { Search } from 'lucide-react';

function PromptDirectory() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search prompts..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          New Prompt
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder cards */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Example Prompt {i}</h3>
            <p className="text-gray-600 mb-4">
              This is a sample prompt that demonstrates the layout of a prompt card.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Category</span>
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                Use Prompt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromptDirectory;