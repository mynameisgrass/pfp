import React, { useState } from 'react'
import type { Language } from '../pages/index'

interface FooterProps {
  lang: Language
}

interface DonationAddress {
  network: string
  address: string
  logoUrl?: string
  logoFallback: string
}

const donationAddresses: DonationAddress[] = [
  {
    network: 'Solana',
    address: '2K2EHwoXJwQN7Cr5hBCUCow4yRNLUFENcCE7EgUhPiAb',
    logoUrl: 'https://cdn.simpleicons.org/solana',
    logoFallback: 'SOL',
  },
  {
    network: 'Ethereum',
    address: '0x177402988D977E1Cee2D2D4bC1Bbe63B82E9d8f0',
    logoUrl: 'https://cdn.simpleicons.org/ethereum',
    logoFallback: 'ETH',
  },
  {
    network: 'Taproot Bitcoin',
    address: 'bc1paukut6jgym3zpg8zj8manjalv34upz9a3mdarf5xp65qfykf0gxsz6jg90',
    logoUrl: 'https://cdn.simpleicons.org/bitcoin',
    logoFallback: 'BTC',
  },
  {
    network: 'Native Bitcoin',
    address: 'bc1qhh2f332x45wlg6rfrxhyetaeqd0s86zkfzln0e',
    logoUrl: 'https://cdn.simpleicons.org/bitcoin',
    logoFallback: 'BTC',
  },
  {
    network: 'Monad',
    address: '0x177402988D977E1Cee2D2D4bC1Bbe63B82E9d8f0',
    logoFallback: 'MON',
  },
  {
    network: 'Base',
    address: '0x177402988D977E1Cee2D2D4bC1Bbe63B82E9d8f0',
    logoUrl: 'https://cdn.simpleicons.org/base',
    logoFallback: 'BASE',
  },
  {
    network: 'Polygon',
    address: '0x177402988D977E1Cee2D2D4bC1Bbe63B82E9d8f0',
    logoUrl: 'https://cdn.simpleicons.org/polygon',
    logoFallback: 'POL',
  },
  {
    network: 'Sui',
    address: '0x39a98275ae34af1460afd1c739cf85a4a92bc1a2be640e2dfc48b789384790ce',
    logoUrl: 'https://cdn.simpleicons.org/sui',
    logoFallback: 'SUI',
  },
  {
    network: 'Hyper EVM Lite',
    address: '0x177402988D977E1Cee2D2D4bC1Bbe63B82E9d8f0',
    logoFallback: 'HYP',
  },
]

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const [copiedNetwork, setCopiedNetwork] = useState<string | null>(null)
  const [brokenLogos, setBrokenLogos] = useState<Record<string, boolean>>({})

  const handleCopy = async (network: string, address: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(address)
      } else if (typeof document !== 'undefined') {
        const tempInput = document.createElement('textarea')
        tempInput.value = address
        tempInput.style.position = 'fixed'
        tempInput.style.opacity = '0'
        document.body.appendChild(tempInput)
        tempInput.focus()
        tempInput.select()
        document.execCommand('copy')
        document.body.removeChild(tempInput)
      }

      setCopiedNetwork(network)
      window.setTimeout(() => {
        setCopiedNetwork((current) => (current === network ? null : current))
      }, 1400)
    } catch {
      setCopiedNetwork(null)
    }
  }

  return (
    <footer className="relative border-t border-primary/35 py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-nature/80 mb-4 font-medium">
          {lang === 'vi' ? 'Tao boi' : 'Crafted by'} <span className="text-primary font-bold">_woospiegrassy_</span>
        </p>
        <p className="text-sm text-nature/70">
          {lang === 'vi'
              ? `© ${currentYear} woospiegrassy. Bảo lưu mọi quyền. | Xây dựng với React, Next.js & Tailwind CSS`
            : `© ${currentYear} woospiegrassy. All rights reserved. | Made with React, Next.js & Tailwind CSS`}
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://github.com/mynameisgrass" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors font-medium">
            GitHub
          </a>
          <a href="https://discord.com/users/1113641373975990383" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors font-medium">
            Discord
          </a>
          <a href="mailto:hailongn789@gmail.com" className="text-secondary hover:text-primary transition-colors font-medium">
            Email
          </a>
        </div>

        <div className="mt-8 rounded-xl border border-primary/35 bg-white/82 backdrop-blur-sm p-5 text-left shadow-lg shadow-black/10">
          <h3 className="text-lg font-bold text-secondary text-center mb-2">
            {lang === 'vi' ? 'Ung ho / Donation' : 'Donation'}
          </h3>
          <p className="text-sm text-nature/70 text-center mb-4">
            {lang === 'vi'
              ? 'Neu ban muon ung ho, hay gui toi mot trong cac dia chi ben duoi.'
              : 'If you want to support my work, you can donate using one of the addresses below.'}
          </p>

          <div className="space-y-3">
            {donationAddresses.map((wallet) => (
              <div
                key={wallet.network}
                className="card-glow p-4 rounded-lg backdrop-blur-sm hover:bg-white/95 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full border border-primary/30 bg-white flex items-center justify-center overflow-hidden">
                    {wallet.logoUrl && !brokenLogos[wallet.network] ? (
                      <img
                        src={wallet.logoUrl}
                        alt={`${wallet.network} logo`}
                        className="h-5 w-5"
                        onError={() => {
                          setBrokenLogos((current) => ({ ...current, [wallet.network]: true }))
                        }}
                      />
                    ) : (
                      <span className="text-[10px] font-bold text-primary leading-none">{wallet.logoFallback}</span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-primary">{wallet.network}</p>
                    <p className="text-xs md:text-sm font-mono text-nature break-all">{wallet.address}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(wallet.network, wallet.address)}
                    className="shrink-0 rounded-md border border-secondary px-3 py-1.5 text-xs text-white bg-secondary hover:bg-dark transition-colors font-semibold"
                  >
                    {copiedNetwork === wallet.network
                      ? (lang === 'vi' ? 'Da copy' : 'Copied')
                      : (lang === 'vi' ? 'Copy nhanh' : 'Quick Copy')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
