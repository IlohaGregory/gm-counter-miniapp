# GM Counter Farcaster Mini-App on Base Mainnet

This is a complete Farcaster mini-app built with React, Vite, Wagmi, and a Solidity smart contract on Base Mainnet.

## 1. Solidity Smart Contract Deployment

The contract is in GMCount.sol.

### Using Remix
1. Go to https://remix.ethereum.org.
2. Create a new file named GMCount.sol and paste the contract code.
3. In the Solidity Compiler tab, select compiler version 0.8.20 and compile.
4. In the Deploy & Run Transactions tab, select Environment: Injected Provider - MetaMask.
5. Set up MetaMask for Base Mainnet:
   - Network Name: Base Mainnet
   - RPC URL: https://mainnet.base.org
   - Chain ID: 8453
   - Currency Symbol: ETH
   - Block Explorer: https://basescan.org
6. Ensure you have real ETH on Base Mainnet (bridge from Ethereum or use an exchange).
7. Deploy the contract.
8. Copy the deployed contract address from the Remix console.
9. To verify: After deployment, go to https://basescan.org, search for the address, click 'Verify and Publish', select 'Via Standard Input JSON', paste the code, and submit.

### Using Foundry
1. Install Foundry: curl -L https://foundry.paradigm.xyz | bash then oundryup.
2. In a new directory: orge init.
3. Replace src/Contract.sol with the GMCount.sol code (rename to GMCount.sol).
4. orge build.
5. Deploy: orge create --rpc-url https://mainnet.base.org --private-key YOUR_PRIVATE_KEY src/GMCount.sol:GMCount.
6. Copy the deployed address from the output.
7. Get a Basescan API key from https://basescan.org/myapikey.
8. Verify: orge verify-contract --chain-id 8453 --etherscan-api-key YOUR_API_KEY DEPLOYED_ADDRESS src/GMCount.sol:GMCount.

After getting the contract address, replace the contractAddress placeholder in src/App.jsx.

## 2. Running the Frontend Locally
1. Install dependencies: 
pm install.
2. Run: 
pm run dev.
3. Open http://localhost:5173 in your browser. Note: Wallet connection only works inside Warpcast mini-app environment.

## 3. Deployment to Vercel
1. Create a Vercel account at https://vercel.com/signup.
2. Create a GitHub account if needed, and create a new repository (e.g., gm-counter-miniapp-mainnet).
3. Push the project to GitHub: git init, git add ., git commit -m ""Initial commit"", git remote add origin YOUR_REPO_URL, git push -u origin main.
4. In Vercel dashboard, click 'New Project', import from GitHub, select your repo.
5. Configure:
   - Framework Preset: Vite.
   - Build Command: vite build (default).
   - Output Directory: dist (default).
   - Install Command: npm install (default).
6. Deploy.
7. After deployment, note your Vercel URL (e.g., https://gm-counter-miniapp-mainnet.vercel.app).
8. Ensure /manifest.json is accessible at https://your-domain/manifest.json.
9. Update iconUrl and websiteUrl in public/manifest.json with real URLs (e.g., upload icon to GitHub or Vercel), then redeploy.

## 4. Publishing as a Farcaster Mini-App
1. Visit https://warpcast.com/~/developers/mini-apps.
2. Click 'Create a new mini-app'.
3. Fill in:
   - Name: GM Counter
   - Description: A simple GM counter on Base.
   - Manifest URL: https://your-vercel-domain/manifest.json
   - Icon URL: Your icon URL from manifest.json
4. Submit.
5. Test: In Warpcast, go to the developer page or use the test URL provided. Open the mini-app to verify the button and count work.
6. Once tested, publish it live from the developer dashboard.
7. The mini-app URL for users will be something like farcaster://miniapps/gm-counter (check the dashboard for the exact slug/URL).

## Final Summary
After deploying the contract and getting the address:
1. Update src/App.jsx with the address.
2. Commit and push to GitHub: git add ., git commit -m ""Update contract address"", git push.
3. Vercel will auto-redeploy.
4. Publish the mini-app as above.
5. Test in Warpcast: Connect wallet (auto in mini-app), click GM, see count increase.
