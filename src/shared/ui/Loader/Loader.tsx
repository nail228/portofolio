import './Loader.scss'
import { classNames } from '@/shared/lib/classNames/classNames' // assuming you have this utility

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('bars-loader', {}, [className])}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}