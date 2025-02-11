import { Card, CardContent } from "@/components/ui/card";

const UICard = () => {
  return (
    <Card className="w-80 p-4 shadow-lg rounded-xl bg-white">
      <CardContent>
        <h2 className="text-xl font-bold text-blue-800">Product Name</h2>
        <p className="text-gray-500 mt-2">This is a beautiful product description.</p>
        <div className="mt-4 text-lg font-semibold text-green-600">$49.99</div>
      </CardContent>
    </Card>
  );
};

export default UICard;
