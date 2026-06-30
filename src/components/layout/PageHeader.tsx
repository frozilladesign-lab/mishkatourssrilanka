import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Parallax } from '../common/Parallax';
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs: {
    label: string;
    path?: string;
  }[];
}
export function PageHeader({
  title,
  subtitle,
  image,
  breadcrumbs
}: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Parallax offset={60} className="w-full h-[120%] -top-[10%] relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center" />
          
        </Parallax>
        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-dark/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}>
          
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight mb-3 drop-shadow-md">
            {title}
          </h1>
          {subtitle &&
          <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto font-light mb-4 drop-shadow-sm">
              {subtitle}
            </p>
          }

          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/80 font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) =>
            <Fragment key={index}>
                <ChevronRightIcon className="w-4 h-4 text-white/50" />
                {crumb.path ?
              <Link
                to={crumb.path}
                className="hover:text-white transition-colors">
                
                    {crumb.label}
                  </Link> :

              <span className="text-white">{crumb.label}</span>
              }
              </Fragment>
            )}
          </nav>
        </motion.div>
      </div>
    </section>);

}