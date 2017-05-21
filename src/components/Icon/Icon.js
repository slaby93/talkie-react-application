import React from 'react'

class Icon extends React.PureComponent {

    translateIcon(icon) {
        let result = icon
            .substr(1, icon.length - 1) // takes values between ""
            .replace(/%3C/g, '<')
            .replace(/%3E/g, '>')
            .replace(/%23/g, '#')
            .replace(/"/g, '')
        result = result
            .substr(
            result.search(/<svg/g) // trims plugin text
            )
        return result
    }

    render() {
        const { onClick, className, icon } = this.props;
        const translatedIcon = this.translateIcon(icon)
        return (
            <div onClick={onClick}
                className={className}
                dangerouslySetInnerHTML={{ __html: translatedIcon }}
            />
        )
    }
}

Icon.propTypes = {
    icon: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
}

export default Icon