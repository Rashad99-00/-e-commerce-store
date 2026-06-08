type Props = {
  message: string;
};

function EmptyState({
  message,
}: Props) {
  return (
    <div className="empty-state">
      {message}
    </div>
  );
}

export default EmptyState;