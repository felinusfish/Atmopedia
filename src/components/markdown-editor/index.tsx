import { useEffect, useState } from "preact/hooks";
import "./index.css";

interface MarkdownEditorProps {
  value: string;
  onChange?: (value: string) => void;
}

export default function MarkdownEditor({
    value,
    onChange,
}: MarkdownEditorProps) {
    const [_value, _setValue] = useState(value);

    useEffect(() => {
        _setValue(value);
    }, [value]);

    return (
        <div class="markdown-editor">
            <div className="fomratting">
                <span>no format available</span>
            </div>
            <div className="inputarea"
                role="textbox"
                contentEditable
                onInput={(e) => {
                    const target = e.target as HTMLElement;
                    onChange && onChange(target.innerText);
                }}
                dangerouslySetInnerHTML={{ __html: _value }}
            >

            </div>
        </div>
    );
}