declare module '@mui/material/styles' {
  interface TypographyVariants {
    data1: React.CSSProperties
    data2: React.CSSProperties
    data3: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    data1?: React.CSSProperties
    data2?: React.CSSProperties
    data3?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    data1: true
    data2: true
    data3: true
    h4: false
    h5: false
    h6: false
  }
}

export {}
