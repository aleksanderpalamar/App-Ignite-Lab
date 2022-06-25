import {Box} from '@chakra-ui/react'
import {Component} from 'react'

export class Vscode extends Component { 

  constructor(props: { title: string }) {
    super(props)
    this.state = {
      title: props.title,      
    }
    this.state = {
      url: 'https://codesandbox.io/s/',
      display_url: 'https://codesandbox.io/s/'
    }
  }

  componentDidMount() {
    let lastVisitedUrl = localStorage.getItem('chrome-url')
    let lastDisplayedUrl = localStorage.getItem('chrome-display-url')
    if (lastVisitedUrl !== null && lastVisitedUrl !== undefined) {
      this.setState(
        {url: lastVisitedUrl, display_url: lastDisplayedUrl},
        this.refreshChrome
      )
    }
  }

  refreshChrome = () => {
    let iframe = document.getElementsByTagName('iframe')[0] as HTMLIFrameElement
    iframe.src = 'https://codesandbox.io/s/'
  }  

  render() {
    return (
      <Box
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"        
      >
        <Box as="iframe" w="100%" h="100%" src="https://codesandbox.io/s/" title="Chrome Url" />
      </Box>
    )
  }
}

export default Vscode

export const displayVscode = () => {
  return <Vscode></Vscode>
}