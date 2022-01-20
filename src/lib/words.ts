import { WORDS } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/valid-guesses'

export const isWordInWordList = (word: string) => {
    return (
        WORDS.includes(word.toLowerCase()) ||
        VALID_GUESSES.includes(word.toLowerCase())
    )
}

export const isWinningWord = (word: string) => {
    return solution === word
}

export const getWordOfDay = () => {
    // January 1, 2022 Game Epoch
    const epochMs = 1641013200000
    const now = Date.now()
    const msInDay = 86400000
    const index = Math.floor((now - epochMs) / msInDay) % WORDS.length;

    return {
        solution: WORDS[index].toUpperCase(),
        solutionIndex: index,
    }
}

export const { solution, solutionIndex } = getWordOfDay()
