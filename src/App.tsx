import FormValuesPreview from "./components/form-preview"
import HookForm from "./components/hook-form"
import HookPreviewBox from "./components/hook-preview-box"
import PreviewBox from "./components/preview-box"

function App() {

  return (
    <div className=" font-medium flex justify-center  items-center gap-22 h-screen mx-auto min-w-[80%]">
      <div>
        <HookForm/>
      </div>
      <div>
        <FormValuesPreview/>
      </div>
      <div>
        <HookPreviewBox/>
      </div>
    </div>
  )
}

export default App
