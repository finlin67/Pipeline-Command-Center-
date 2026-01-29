import React from 'react';
import { HashRouter, Routes, Route, useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PipelineDashboard from './components/PipelineDashboard';

function LeadDetails() {
  const { id } = useParams();
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="max-w-md w-full bg-[#161f31]/70 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl">
         <Link to="/" className="flex items-center gap-2 text-[#3abff8] mb-6 hover:opacity-80 transition-opacity w-fit">
            <ArrowLeft size={16} />
            <span className="text-sm font-semibold">Back to Dashboard</span>
         </Link>
         <h1 className="text-2xl font-bold text-white mb-2">Lead Details</h1>
         <p className="text-white/60 mb-6">Viewing details for Lead ID: <span className="text-emerald-400 font-mono ml-1">{id}</span></p>
         
         <div className="space-y-3">
             <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                <span className="text-white/40 text-sm font-medium">Company Name</span>
                <span className="text-white font-bold">Acme Corp</span>
             </div>
             <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                <span className="text-white/40 text-sm font-medium">Status</span>
                <span className="text-emerald-400 font-bold px-2 py-0.5 bg-emerald-500/10 rounded">New</span>
             </div>
             <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                <span className="text-white/40 text-sm font-medium">Potential Value</span>
                <span className="text-white font-bold tabular-nums">$125,000</span>
             </div>
         </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="w-full h-screen bg-[#0b1224] text-white overflow-hidden">
        <Routes>
          <Route path="/" element={<PipelineDashboard />} />
          <Route path="/lead/:id" element={<LeadDetails />} />
        </Routes>
      </div>
    </HashRouter>
  );
}