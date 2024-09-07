interface NoteItemProps {
  note: {
    title: string;
    text: string;
  };
  index: number;
  onDelete: (index: number) => void;
}

const NoteItem = (props: NoteItemProps) => {
  return (
    <div className="box">
      <h3>{props.note.title}</h3>
      <p>{props.note.text}</p>
      <button className="myButtondel" onClick={() => props.onDelete(props.index)}>
        Удалить
      </button>
    </div>
  );
};

export default NoteItem;