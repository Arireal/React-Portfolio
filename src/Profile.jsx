import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const AboutPage = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Ariane Souza</h1>
        <h2 className="text-3xl font-bold mb-8">Profile</h2>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Intro</h3>
          <p className="text-gray-700 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Work Philosophy</h3>
          <p className="text-gray-700 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book.
          </p>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChartCard 
          title="Coding Favorites According to github chart"
          data={[
            { name: 'React', value: 35, color: '#3B82F6' },
            { name: 'Node.js', value: 25, color: '#10B981' },
            { name: 'Python', value: 20, color: '#8B5CF6' },
            { name: 'Other', value: 20, color: '#60A5FA' }
          ]}
        />

        <ChartCard 
          title="Job Preferences chart"
          data={[
            { name: 'Frontend', value: 40, color: '#3B82F6' },
            { name: 'Backend', value: 30, color: '#10B981' },
            { name: 'UX/UI', value: 20, color: '#8B5CF6' },
            { name: 'Other', value: 10, color: '#60A5FA' }
          ]}
        />

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-6">Skills List</h3>
          <div className="space-y-4">
            <SkillBar name="React" percentage={90} color="bg-blue-500" />
            <SkillBar name="Node.js" percentage={85} color="bg-green-500" />
            <SkillBar name="Python" percentage={75} color="bg-purple-500" />
            <SkillBar name="UX/UI" percentage={95} color="bg-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ChartCard = ({ title, data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="flex justify-center">
        <PieChart width={280} height={200}>
          <Pie
            data={data}
            cx={140}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend 
            layout="vertical"
            align="right"
            verticalAlign="middle"
          />
        </PieChart>
      </div>
    </div>
  );
};

const SkillBar = ({ name, percentage, color }) => (
  <div>
    <div className="flex justify-between mb-1">
      <span className="text-gray-700">{name}</span>
      <span className="text-gray-600">{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded">
      <div 
        className={`h-full rounded ${color}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default AboutPage;