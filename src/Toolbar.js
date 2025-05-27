export default function Toolbar() {
  return (
    <div className="border p-3">
      <button 
        onClick={() => alert('Playing!')}
        className="btn btn-primary me-2"
      >
        Play Movie
      </button>
      <button 
        onClick={() => alert('Uploading!')}
        className="btn btn-secondary"
      >
        Upload Image
      </button>
    </div>
  );
}