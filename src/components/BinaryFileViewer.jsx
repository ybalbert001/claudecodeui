import React from 'react';
import { X, Download, FileText } from 'lucide-react';

function BinaryFileViewer({ file, onClose }) {
  const downloadUrl = `/api/projects/${file.projectName}/files/content?path=${encodeURIComponent(file.path)}`;

  const getFileTypeLabel = (filename) => {
    const ext = filename.split('.').pop()?.toLowerCase();
    const types = {
      pdf: 'PDF Document',
      doc: 'Word Document',
      docx: 'Word Document',
      xls: 'Excel Spreadsheet',
      xlsx: 'Excel Spreadsheet',
      ppt: 'PowerPoint Presentation',
      pptx: 'PowerPoint Presentation',
    };
    return types[ext] || 'Binary File';
  };

  return (
    <div className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-medium text-foreground truncate">{file.name}</h3>
          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{getFileTypeLabel(file.name)}</p>
            <p className="text-xs text-muted-foreground mt-1">{file.path}</p>
          </div>

          <a
            href={downloadUrl}
            download={file.name}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default BinaryFileViewer;
