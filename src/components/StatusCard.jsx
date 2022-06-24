import { Card } from '@material-tailwind/react'; 
import { CardBody } from '@material-tailwind/react';
import { CardHeader } from '@material-tailwind/react';
import { CardFooter } from '@material-tailwind/react';
import { IconButton } from '@material-tailwind/react';
import { Typography } from "@material-tailwind/react";

export function StatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    date,
}) {
    return (
        <div className="px-11 mb-10">
            <Card>
                <CardHeader color={color} className="flex-wrap border-b border-gray-200 mb-0 bg-transparent shadow-transparent">
                    <IconButton  size='lg' color={color} >
                        
                        <i className={icon}/>
                    </IconButton >
                    
                </CardHeader>
                <CardBody className='text-right'>
                        <Typography variant="lead" color={percentageColor}>{title}</Typography>
                        <Typography variant="paragraph" >{amount}</Typography>
                </CardBody> 
                <CardFooter className='flex'>
                    
                    <Typography variant="small" color={percentageColor}>{percentage}</Typography>
                    <Typography variant="small" >{date}</Typography>
                    
                </CardFooter>
            </Card>
        </div>
    );
}
