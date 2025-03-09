import React from 'react';

const CorsHelper: React.FC = () => {
  // Get the current port from the window location
  const currentPort = window.location.port;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">CORS Configuration Helper</h2>
      
      <div className="mb-4">
        <p className="mb-2">Your React app is running on port: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{currentPort}</span></p>
        <p>Make sure this port is included in your Django CORS settings.</p>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="font-bold mb-2">Add to your Django settings.py:</h3>
        <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
          {`CORS_ALLOWED_ORIGINS = [
    "http://localhost:${currentPort}",
    "http://127.0.0.1:${currentPort}",
]`}
        </pre>
      </div>
      
      <div className="mt-6">
        <h3 className="font-bold mb-2">Authentication Settings:</h3>
        <p className="mb-2">If you're having authentication issues, temporarily modify your REST_FRAMEWORK settings:</p>
        <pre className="bg-gray-800 text-white p-3 rounded overflow-x-auto">
          {`REST_FRAMEWORK = {
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ],
    # Comment out or remove this for testing
    # 'DEFAULT_PERMISSION_CLASSES': (
    #     'rest_framework.permissions.IsAuthenticated',
    # ),
}`}
        </pre>
      </div>
    </div>
  );
};

export default CorsHelper;ovie