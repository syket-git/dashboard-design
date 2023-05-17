import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const Suggestions = () => {
  //TODO: Suggestions Card would be separate file.
  const SuggestionsCard = () => {
    return (
      <div className="flex items-center gap-2">
        <GiCheckMark className="text-green-500" />
        <div className="flex-1">
          <p className="text-base font-medium">Grocery store field trip.</p>
          <p className="text-sm text-gray-500">27 Jun 2023</p>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white lg:p-0 p-5">
      <h4 className="text-lg lg:border-b pb-1 lg:mb-3 font-medium">Suggestions</h4>
      <div className="space-y-2">
        <SuggestionsCard />
        <SuggestionsCard />
        <SuggestionsCard />
      </div>
    </div>
  );
};

export default Suggestions;
