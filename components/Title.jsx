import PropTypes from 'prop-types'

const Title = ({ title }) => {
  return (
    <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#5271ff] before:h-full before:-left-0 pl-3">
      {title}
    </div>
  )
}

export default Title

Title.propTypes = {
  title: PropTypes.string.isRequired,
}
