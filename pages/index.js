import Layout from "../components/layout";
import fetch from 'isomorphic-unfetch'
import Headers from 'fetch-headers'
import Item from "../components/item";
import Selectors from "../components/selectors";

const Home = ({stars}) => (

    <Layout>
      <div>
          <div className="plans">
            <p>Plans & prices</p>
          </div>
          <div className="selectors">
              <Selectors></Selectors>
          </div>
          <div className="price-item">{stars.map((item, i) =>
              <Item key={i} stars={item}> </Item>
          )}
          </div>
      </div>

      <style jsx>{`
            ul, Item, .price-item {
                display: flex;
                flex-direction: row;
                width: 100%;
            }
            @media only screen and (max-width: 900px) {
                ul, Item, .price-item {
                  flex-direction: column;
                }
            }
            .plans {
                padding: 16px 0;
            }
            .selectors {
                padding: 8px 0;
                text-align: right;
            }
        `}</style>
    </Layout>
);

Home.getInitialProps  = async (currency = 'EUR') => {
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json;charset=utf-8');
    myHeaders.append('x-pm-appversion', 'Other');
    myHeaders.append('x-pm-apiversion', '3');
    myHeaders.append('Accept', 'application/vnd.protonmail.v1+json');

    const myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    const response = await fetch(`https://api.protonmail.ch/payments/plans?${currency}`, myInit);
    const result = await response.json();
    const plans = result.Plans;
    console.log(`plans are ${result.Plans[0]}`);

    // // delete here the unneeded data
    plans.splice(1, 1);
    plans.splice(2, 1);
    plans.splice(2, 1);
    plans.splice(3, 5);

    // hardcode some data here
    //hardcode the Free plan
    plans.unshift(
        {
            Name: 'Free',
            Currency: 'EUR',
            Amount: 1,
            Pricing: { '1': 0, '12': 0, '24': 0 },
            Title: 'Free',
            Description: 'The basis for private and secure communications',
            Users: '1 user',
            Storage: '500 Mb storage',
            Addresses: '1 address',
            Domain: 'No domain support',
            Support: 'ProtonVPN (optional) *'
        
        }
    );
    
    // hardcode data for each plan
    plans[1].Users = '1 user';
    plans[1].Storage = '5 GB storage *';
    plans[1].Addresses = '5 addresses *';
    plans[1].Domain = 'Supports 1 domain *';
    plans[1].Options = 'ProtonVPN (oprional) *';
    plans[1].Support = 'Supports folders, labels, filters, auto-reply, IMAP/SMTP and more'
    plans[1].Description = 'Full-featured mailbox with advanced protection';
    plans[1].Popular = 'Most popular'

    plans[2].Users = '1 - 5000 users';
    plans[2].Storage = '5 GB storage per user *';
    plans[2].Addresses = '5 addresses per user *';
    plans[2].Domain = 'Supports 2 domains *';
    plans[2].Support = 'Catch all email, user management, priority support and more';
    plans[2].Options = 'ProtonVPN (oprional) *';
    plans[2].Description = 'Proton mail for professionals and businesses';

    plans[3].Users = '6 users';
    plans[3].Storage = '20 GB storage';
    plans[3].Addresses = '50 addresses';
    plans[3].Domain = 'Supports 10 domains';
    plans[3].Support = 'Include all features';
    plans[3].Priority = 'Priority support'
    plans[3].Options = 'Includes ProtonVPN';
    plans[3].Description = 'ProtonMail for families and small businesses';

    console.log(plans)
    return { stars: plans  }
};


export default Home
