import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const INCOMING = [
  "Hey how much for a cut?",
  "Do you have Saturday free?",
  "What are your prices?",
]

const REPLIES = [
  "We charge £25 for a cut — want to book in? ✓✓",
  "Saturday 2pm is free! Book here → ✓✓",
  "Prices start from £20, here's our menu → ✓✓",
]

// Phase timing (ms)
const PHASE_1_START   = 0
const PHASE_1_STAGGER = 600
const PHASE_2_START   = PHASE_1_START + INCOMING.length * PHASE_1_STAGGER + 200 // 2000
const PHASE_3_START   = PHASE_2_START + 400  // 2400
const PHASE_3_STAGGER = 300
const PHASE_4_START   = PHASE_3_START + REPLIES.length * PHASE_3_STAGGER + 200  // 3500
const RESET_AT        = PHASE_4_START + 2000 // 5500

export default function DmFlow() {
  // visibleIn[i] = whether incoming bubble i is visible
  const [visibleIn, setVisibleIn]       = useState([false, false, false])
  const [pulsing, setPulsing]           = useState(false)
  const [visibleReply, setVisibleReply] = useState([false, false, false])
  const [labelVisible, setLabelVisible] = useState(false)
  const containerRef = useRef(null)
  const pausedRef    = useRef(false)
  const timerRefs    = useRef([])

  function clearTimers() {
    timerRefs.current.forEach(clearTimeout)
    timerRefs.current = []
  }

  function schedule(fn, delay) {
    const id = setTimeout(() => {
      if (!pausedRef.current) fn()
    }, delay)
    timerRefs.current.push(id)
  }

  function reset() {
    setVisibleIn([false, false, false])
    setPulsing(false)
    setVisibleReply([false, false, false])
    setLabelVisible(false)
  }

  function runSequence() {
    clearTimers()
    reset()

    // Phase 1 — incoming DMs
    INCOMING.forEach((_, i) => {
      schedule(() => {
        setVisibleIn(prev => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, PHASE_1_START + i * PHASE_1_STAGGER)
    })

    // Phase 2 — pulse
    schedule(() => setPulsing(true),  PHASE_2_START)
    schedule(() => setPulsing(false), PHASE_2_START + 500)

    // Phase 3 — replies
    REPLIES.forEach((_, i) => {
      schedule(() => {
        setVisibleReply(prev => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, PHASE_3_START + i * PHASE_3_STAGGER)
    })

    // Phase 4 — label
    schedule(() => setLabelVisible(true), PHASE_4_START)

    // Reset + loop
    schedule(() => {
      reset()
      // Small gap then restart
      const id = setTimeout(runSequence, 400)
      timerRefs.current.push(id)
    }, RESET_AT)
  }

  useEffect(() => {
    // IntersectionObserver — pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        pausedRef.current = !entry.isIntersecting
        if (entry.isIntersecting) {
          runSequence()
        } else {
          clearTimers()
          reset()
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
      clearTimers()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const bubbleBase = "px-3 py-2 rounded-2xl text-[13px] leading-snug max-w-[80%] mb-2"

  return (
    <div
      ref={containerRef}
      className="w-full max-w-2xl mx-auto rounded-xl border border-[#E8E6E0] bg-[#F9F8F5] p-5"
    >
      {/* Header bar */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E8E6E0]">
        <div className="w-2 h-2 rounded-full bg-[#2D7A3A]" />
        <span className="text-[11px] text-[#6B6B65] font-body">Vexa is handling your DMs</span>
      </div>

      {/* Chat area */}
      <div className="flex flex-col md:flex-row gap-4 min-h-[160px]">

        {/* Incoming — left */}
        <div className="flex-1 flex flex-col justify-start">
          {INCOMING.map((msg, i) => (
            <AnimatePresence key={i}>
              {visibleIn[i] && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`${bubbleBase} bg-[#F0EEE8] text-[#0D0D0D] self-start`}
                >
                  {msg}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Vexa dot — centre */}
        <div className="flex items-center justify-center md:flex-col md:justify-center">
          <motion.div
            animate={pulsing ? { scale: [1, 1.3, 1] } : { scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="w-3 h-3 rounded-full bg-[#2D7A3A]"
          />
        </div>

        {/* Replies — right */}
        <div className="flex-1 flex flex-col justify-start items-end">
          {REPLIES.map((msg, i) => (
            <AnimatePresence key={i}>
              {visibleReply[i] && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`${bubbleBase} bg-[#2D7A3A] text-white self-end text-right`}
                >
                  {msg}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>

      {/* Label */}
      <div className="mt-3 pt-3 border-t border-[#E8E6E0] text-center">
        <AnimatePresence>
          {labelVisible && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs text-[#2D7A3A]"
            >
              Replied instantly. Lead secured.
            </motion.p>
          )}
        </AnimatePresence>
        {!labelVisible && <p className="text-xs text-transparent select-none">·</p>}
      </div>
    </div>
  )
}
