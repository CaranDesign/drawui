import { DrawuiCard } from './components'
import { DrawuiButton } from './components/button/DrawuiButton'
import { DrawuiCollapse } from './components/collapse/DrawuiCollapse'
import { DrawuiDivider } from './components/divider/DrawuiDivider'
import { DrawuiIconButton } from './components/iconButton/DrawuiIconButton'
import { IconHome } from './icons'
import { IconBell } from './icons/IconBell'
import { IconMinus } from './icons/IconMinus'
import { IconPlus } from './icons/IconPlus'
import { IconSearch } from './icons/IconSearch'
import { IconSettings } from './icons/IconSettings'
import { IconUser } from './icons/IconUser'
import { DrawuiThemeProvider } from './theme'

function App() {
  
  const iconProps = { size: 32, color: "rgba(30, 30, 30, 1)" };

  return (
    <>
      <DrawuiThemeProvider
        theme={{
          
        }}
      >
        
        Buttons
        <div style={{ padding: 40, display:"flex", gap:"20px", marginBottom:"20px"}}>

          <DrawuiButton
            strokeWeight='thin'
            radius='lg'
            size='sm'
            backgroundColor='#00833fff'
          >
            <p style={{fontWeight:400}}>Small</p>
          </DrawuiButton>

          <DrawuiButton
            strokeWeight='medium'
            radius='lg'
            size='md'
            backgroundColor='#fedd00'
          >
            <p style={{fontWeight:500}}>Medium</p>
          </DrawuiButton>

          <DrawuiButton
            strokeWeight='thick'
            radius='lg'
            size='xl'
            backgroundColor='#9c9e8325'
          >
            <p style={{fontWeight:600}}>Large</p>
          </DrawuiButton>

          <DrawuiIconButton icon={<IconMinus/> } size='sm'/>
          <DrawuiIconButton icon={<IconPlus/> } size='md' backgroundColor='#2dbe7895'/>
          <DrawuiIconButton icon={<IconSearch/> } size='lg' backgroundColor='#9abe2d95'/>
          
        </div>

        Cards
        <div style={{ padding: 40, display:"flex", gap:"20px", marginBottom:"20px"}}>
          <DrawuiCard
            radius="lg"
            strokeWeight="thick"
            backgroundColor='#f7f7f7ff'
            width={400}
            height={250}
            header={
              <h3>Card Header</h3>
            }
            footer={
             <DrawuiButton
                strokeWeight='thin'
                radius='lg'
                size='sm'
                backgroundColor='#00833fff'
              >
                <p style={{fontWeight:400}}>Card con footer</p>
              </DrawuiButton>
            }
          >
            <p>Contenuto centrale della card</p>
          </DrawuiCard>
  
          <DrawuiCard
            radius="full"
            strokeWeight="thick"
            backgroundColor='#f7f7f7ff'
            width={100}
            height={150}
          >
            <p>Card Vuota</p>
          </DrawuiCard>
        </div>
        
        Collapse
        <div style={{marginTop:"10px"}}>
          <DrawuiCollapse
            header={"Cliccami"}
          >
            <DrawuiCard height={70} backgroundColor='#e0e0e0ff'>
              Testo Espanso
            </DrawuiCard>
          </DrawuiCollapse>
        </div>
        
        Divider
        <div style={{marginTop:"10px", marginBottom:"20px"}}>
          <DrawuiDivider strokeWeight="thick" />
        </div>
        
        Icon Set
        <div style={{marginTop:"10px", display:"flex", gap:"10px"}}>
          <IconHome {...iconProps} />
          <IconSearch {...iconProps} />
          <IconBell {...iconProps} />
          <IconMinus {...iconProps} />
          <IconPlus {...iconProps} />
          <IconSettings {...iconProps} />
          <IconUser {...iconProps} />
        </div>
        

     </DrawuiThemeProvider>
    </>
  )
}

export default App
