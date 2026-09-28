# Property Portal Web

The web portal lets visitors explore sample sale and rental listings in Yangon and Mandalay. Property cards open details with images, pricing, location, property facts, and amenities. Local demo accounts provide role-specific dashboards; owners and agents can add sample listings.

## Run locally

Start the API first, then run:

```powershell
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Vite forwards `/api` requests to the local API at port `4000`.

## Try the demo

Click **Sign in** and choose a role. The password for all local demo accounts is `demo1234`.

- Owner and agent: open the dashboard and add a sample property listing.
- Buyer/renter: open the dashboard and browse properties.
- Staff and admin: open the role dashboard and review the available role actions.

New demo listings appear immediately in the running API's results and clear when the API restarts.
