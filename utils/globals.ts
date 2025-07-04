export const getStatusStyle = (status: string) => {
  switch (status) {
    case "Review":
    case "Ready for review":
    case "Ready for Review":
      return "bg-yellow-500/20 text-yellow-500";
    case "Submitted":
    case "Submitted to Network":
      return "bg-amber-600/20 text-amber-600";
    case "With editor":
    case "With Editor":
      return "bg-purple-500/20 text-purple-500";
    case "In Progress":
      return "bg-blue-500/20 text-blue-500";
    case "Draft":
      return "bg-gray-500/20 text-gray-500";
    case "Complete":
    case "Completed":
      return "bg-green-500/20 text-green-500";
    default:
      return "bg-muted text-muted-foreground";
  }
};
