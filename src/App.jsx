import { useAccount, useReadContract, useWriteContract } from 'wagmi'

const contractAddress = '0x90892bB8b2Edbda57F217e339914881A5A8694ab'

const abi = [
  {
    name: 'count',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
  },
  {
    name: 'gm',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [],
    outputs: [],
  },
]

function App() {
  const { isConnected } = useAccount()
  const { data: count, refetch } = useReadContract({
    abi,
    address: contractAddress,
    functionName: 'count',
  })
  const { writeContract } = useWriteContract({
    mutation: {
      onSuccess: () => refetch(),
    },
  })

  const handleGm = () => {
    writeContract({
      abi,
      address: contractAddress,
      functionName: 'gm',
    })
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>GM Counter</h1>
      <p>Current GM count: {count ? count.toString() : 'Loading...'}</p>
      {isConnected ? (
        <button onClick={handleGm}>GM</button>
      ) : (
        <p>Connect your wallet to GM</p>
      )}
    </div>
  )
}

export default App
