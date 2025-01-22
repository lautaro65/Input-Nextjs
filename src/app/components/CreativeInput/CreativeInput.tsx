"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface CreativeInputProps {
  placeholder: string
}

const CreativeInput: React.FC<CreativeInputProps> = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="relative w-80">
      <div className="relative">
        {/* Input container with animated borders */}
        <div className="relative">
          {/* Bottom border (always visible) */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600" />

          {/* Left border (animated) */}
          <motion.div
            className="absolute bottom-0 left-0 w-[2px] bg-gradient-to-t from-purple-600 via-pink-600 to-blue-600"
            initial={{ height: 0 }}
            animate={{ height: isFocused ? '100%' : 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Right border (animated) */}
          <motion.div
            className="absolute bottom-0 right-0 w-[2px] bg-gradient-to-t from-purple-600 via-pink-600 to-blue-600"
            initial={{ height: 0 }}
            animate={{ height: isFocused ? '100%' : 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          />

          {/* Top border (animated) */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isFocused ? 1 : 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          />

          {/* Input field */}
          <input
            type="text"
            className="w-full bg-gray-900 text-gray-100 px-4 py-3 outline-none rounded-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {/* Placeholder text with animation */}
          <motion.span
            className="absolute left-4 pointer-events-none"
            initial={{ y: 0 }}
            animate={{
              y: isFocused || inputValue ? -28 : 0,
              scale: isFocused || inputValue ? 0.8 : 1,
              color: isFocused ? '#8B5CF6' : '#6B7280'
            }}
            transition={{ duration: 0.2 }}
          >
            {placeholder}
          </motion.span>
        </div>
      </div>
    </div>
  )
}

export default CreativeInput

