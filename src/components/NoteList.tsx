import React from 'react';

interface NoteListProps {
  children: React.ReactNode;
}

const NoteList = ({ children }: NoteListProps) => {
  return <>{children}</>;
};

export default NoteList;