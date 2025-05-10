"use client";
import { useState, useMemo } from "react";
import InputForm from "./ui/InputField"; // Adjust path if needed
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/constants";
import {useChainId, useConfig, useAccount} from "wagmi";
import {readContract} from "@wagmi/core";
import { calculateTotals } from "@/utils/calculateTotals";

export  function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState<string>("");
    const [recipients, setRecipients] = useState<string[]>([]); // Array of recipient addresses
    const [amounts, setAmounts] = useState<number[]>([]); // Array of amounts for each recipient

    // get chainId
    const chainId = useChainId(); 
    const config = useConfig();
    const account = useAccount();
    const total: number = useMemo(() => calculateTotals(amounts) , [amounts]);



    // get approved amount
    async function getApprovedAmount(tSenderAddress: string | null): Promise<number> { 
        if (!tSenderAddress) {
            alert("Please connect to a wallet");
            return 0;
        }

        // read from the chain to see if the token is approved
        const response = await readContract(config, {
            abi: erc20Abi,
            address: tokenAddress as `0x${string}`,
            functionName: "allowance",
            args: [account.address, tSenderAddress as `0x${string}`],

        });

        return response as number;
        
    
    
    }

    async function hanldeSubmit() {
        // 1. Approve the token transfer for the contract
        // 2. Call the airdrop function on the contract
        // 3. Wait for the transaction to be mined
        
        const tSenderAddress = chainsToTSender[chainId].tsender;
        const approvedAmount = await getApprovedAmount(tSenderAddress);
        console.log("approved amount", approvedAmount);
        console.log("total amount", total);
        if (approvedAmount < total ) {
            alert("Please approve the token transfer for the contract");
            return;
        }
    }
  
    return (
      <div className="p-4 space-y-4"> {/* Add some padding/spacing */}
        <InputForm
          label="Airdrop token Address"
          placeholder="Enter token contract address (e.g., 0x95afb...)"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)} // Update state on change
          type="text" // Explicitly set type
          // 'large' prop is omitted (defaults to false or not needed for single line)
        />

        <InputForm
          label="Recipients"
          placeholder="0xadfr...;0xrfgt...;0xghjk..." // Example format
          value={recipients.join(";")} // Join array for display
          onChange={(e) => setRecipients(e.target.value.split(";"))} // Split string into array
          large={true}
          type="text" // Explicitly set type
          // 'large' prop is omitted (defaults to false or not needed for single line)
        />

        <InputForm
          label="Amount"
          placeholder="100, 200, 300,..." // Example format
          value={amounts.join(",")} // Join array for display
          onChange={(e) => setAmounts(e.target.value.split(",").map(Number))} // Split string into array of numbers
          large={true}
          type="text" // Explicitly set type
          // 'large' prop is omitted (defaults to false or not needed for single line)
        />
  
        {/* We will add InputForms for Recipients and Amounts here later */}
  
        {/* Button to trigger the airdrop  */}
        <button onClick={hanldeSubmit} className =  {"bg-black"}> Send tokens</button>
      </div>
    );
  }
  