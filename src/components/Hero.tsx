import Link from 'next/link'
import BACCalculator from '@/components/BACCalculator'

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <span className="block text-base font-semibold text-blue-900">
                Free Online BAC Calculator
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <h1><span className="block text-gray-600">BAC Calculate</span></h1>
                <span className="block text-blue-600">Stay Safe & Informed</span>
              </span>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Calculate your Blood Alcohol Content (BAC) instantly and get personalized safety recommendations. Make informed decisions about your alcohol consumption.
              </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <p className="text-base font-medium text-gray-900">
                Key features of our BAC calculator:
              </p>
              <ul className="mt-3 space-y-3 text-sm text-gray-500">
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Real-time BAC estimation</span>
                </li>
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Safety recommendations</span>
                </li>
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Sobriety time estimates</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <BACCalculator />
          </div>
        </div>
      </div>
    </div>
  )
}