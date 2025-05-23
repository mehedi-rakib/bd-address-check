import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const companies = [
  {
    name: 'Our Port Immersion Price',
    price: '2.2 million yen',
    type: 'base',
  },
  {
    name: 'Company A - Joining Price',
    price: '2.35 million yen',
    action: 'Place a bid',
    type: 'bid',
  },
  {
    name: 'Company B - Price',
    price: '2.38 million yen',
    action: 'Sell here',
    type: 'winner',
  },
];

export default function BiddingFlowComponent() {
  return (
    <div className="max-w-4xl mx-auto md:p-4 space-y-8">
      <h2 className="text-3xl text-blue-900 font-bold text-center">
        Bidding Flow Explained
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-xl border-2 p-4 ${
              company.type === 'winner' ? 'border-green-500' : 'border-gray-200'
            }`}
          >
            <Card elevation={0} className="bg-transparent shadow-none">
              <CardContent>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">{company.name}</h3>
                  <p className="text-lg text-gray-600">{company.price}</p>
                  {company.action && (
                    <Button
                      variant="contained"
                      color={company.type === 'winner' ? 'success' : 'primary'}
                      fullWidth
                    >
                      {company.action}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500">
        If there are requests from multiple companies, the one with the highest bid wins.
      </p>
    </div>
  );
}