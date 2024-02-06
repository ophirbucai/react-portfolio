import React, { useEffect, useMemo, useRef, useState } from 'react'
import cn from '../assets/utils/cn.ts'

enum Direction {
    FORWARD = 'forward',
    BACKWARD = 'backward'
}
/**
 * <b>Warning:</b> Ensure that typewriter styles are imported in the component's scope.
 */
const useTypewriter = (
    words: string[],
    keySpeed = 120,
    pause = 1000
): { word: React.ReactNode } => {
    const [wordIndex, setWordIndex] = useState<number>(words.length - 1)
    const [currentWord, setCurrentWord] = useState<string[]>([])

    const direction = useRef(Direction.BACKWARD)
    const typingInterval = useRef<NodeJS.Timeout>()
    const letterIndex = useRef<number>(0)

    useEffect(() => {
        const backspace = () => {
            if (letterIndex.current === 0) {
                const isOnLastWord = wordIndex === words.length - 1

                setWordIndex(!isOnLastWord ? wordIndex + 1 : 0)
                direction.current = Direction.FORWARD

                return
            }

            const segment = currentWord.slice(0, currentWord.length - 1)
            setCurrentWord(segment)
            letterIndex.current = currentWord.length - 1
        }
        const typeLetter = () => {
            if (letterIndex.current >= words[wordIndex].length) {
                direction.current = Direction.BACKWARD
                clearInterval(typingInterval.current)
                setTimeout(backspace, pause)
                return
            }

            clearInterval(typingInterval.current)
            const segment = words[wordIndex].split('')
            setCurrentWord(currentWord.concat(segment[letterIndex.current]))
            letterIndex.current = letterIndex.current + 1
        }

        typingInterval.current = setInterval(() => {
            if (direction.current === Direction.FORWARD) {
                typeLetter()
            } else {
                backspace()
            }
        }, keySpeed)

        return () => {
            clearInterval(typingInterval.current)
        }
    }, [currentWord, wordIndex, keySpeed, words, pause])

    const longestWord = useMemo(() => {
        return words.reduce((acc, currWord) => {
            return currWord.length > acc.length ? currWord : acc
        }, words[0] || '')
    }, [words])

    return {
        word: (
            <span className={cn('word', !currentWord.length && 'empty')} data-longest-word={longestWord}>
                <span data-current-word={words[wordIndex]}>{currentWord.length ? currentWord.join('') : '0'}</span>
            </span>
        )
    }
}

export default useTypewriter
