import React from 'react'

export const renderField = ({tagName, className, id, defaultValue, input, label, type, placeholder, htmlFor, icon, rows, cols, meta: {touched, error}}) => {
    const TagName = tagName ? tagName : 'input';

    return <div>
        <div>
            <label htmlFor={htmlFor} data-icon={icon}>{label}</label>
            <TagName {...input}
                     id={id}
                     className={className}
                     type={type}
                     placeholder={placeholder}
                     rows={rows}
                     cols={cols}
                     value={defaultValue}
            />
            {touched && error && <span className='validation-error'>{error}</span>}
        </div>
    </div>
}

export const selectField = ({tagName, className, options, id, input, label, htmlFor, icon, meta: {touched, error}}) => {
    const TagName = tagName ? tagName : 'select';

    return <div>
        <div>
            <label htmlFor={htmlFor} data-icon={icon}>{label}</label>
            <TagName {...input}
                     id={id}
                     className={className}
                     options={options}
            >
                {
                    Object.values(options).map((opt, index) => <option
                        name={opt} key={index}>{typeof options === 'string' ? options : opt}</option>)
                }
            </TagName>
            {touched && error && <span className='validation-error'>{error}</span>}
        </div>
    </div>
}