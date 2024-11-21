import React from 'react';

function TemplateBuilder() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Template Name"
            className="text-xl font-semibold bg-transparent border-b-2 border-transparent focus:border-indigo-500 focus:outline-none"
            defaultValue="Untitled Template"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save Template
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 space-y-4">
            <h3 className="font-medium text-gray-900">Building Blocks</h3>
            <div className="space-y-2">
              {['Text', 'Variable', 'Condition', 'Loop'].map((block) => (
                <div
                  key={block}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-move hover:border-indigo-500 transition-colors"
                >
                  {block}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 min-h-[400px] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-4">
            <p className="text-gray-500 text-center mt-8">
              Drag and drop building blocks here to create your template
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateBuilder;