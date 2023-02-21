// codegen:start { preset: barrel, include: ./icons/*.ts?(x) }
export * from './icons/svgs.js'
export * from './icons/types.js'
// codegen:end

export * from '@mui/icons-material'

// Explicitly export icons with duplicate names
export {
  Download,
  Filter,
  Grade,
  Memory,
  PersonSearch,
  QuestionMark,
  RestoreFromTrash,
  Rocket,
  Square,
  Upload,
} from './icons/svgs.js'
