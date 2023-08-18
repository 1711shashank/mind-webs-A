import CodeIcon from '@mui/icons-material/Code';
import CreateIcon from '@mui/icons-material/Create';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

export const cardData = [
    {
        left: {
            title: 'Explain Code',
            description: 'Explain some Code based on the syntax provided',
            placeholder: 'print("Hello World")',
            icon: <MessageOutlinedIcon sx={{ fontSize: '2.2rem' }} />,

        },
        right: {
            title: 'What does this code do?',
            subtitle: 'The following code does:',
            steps: [
                'The above code is a function definition.',
                'It defines a new function called `Hello World` that takes a single argument called `text`',
                'The body of the function is a single line of code that prints out the value of the `text` if it is defined, or `Hello World` if it is not defined.',
            ],
        },
    },
    {
        left: {
            title: 'Regex',
            description: 'Explain some Code based on the syntax provided',
            placeholder: 'print("Hello World")',
            icon: <CodeIcon className='mui-icon' />
        },
        right: {
            title: 'What does this code do?',
            subtitle: 'The following code does:',
            steps: [
                'The above code is a function definition.',
                'It defines a new function called `Hello World` that takes a single argument called `text`',
                'The body of the function is a single line of code that prints out the value of the `text` if it is defined, or `Hello World` if it is not defined.',
            ],
        },
    },
    {
        left: {
            title: 'Fix Grammar',
            description: 'Explain some Code based on the syntax provided',
            placeholder: 'print("Hello World")',
            icon: <CreateIcon className='mui-icon' />
        },
        right: {
            title: 'What does this code do?',
            subtitle: 'The following code does:',
            steps: [
                'The above code is a function definition.',
                'It defines a new function called `Hello World` that takes a single argument called `text`',
                'The body of the function is a single line of code that prints out the value of the `text` if it is defined, or `Hello World` if it is not defined.',
            ],
        },
    },
    {
        left: {
            title: 'Todo',
            description: 'Explain some Code based on the syntax provided',
            placeholder: 'print("Hello World")',
            icon: <AssignmentIcon className='mui-icon' />
        },
        right: {
            title: 'What does this code do?',
            subtitle: 'The following code does:',
            steps: [
                'The above code is a function definition.',
                'It defines a new function called `Hello World` that takes a single argument called `text`',
                'The body of the function is a single line of code that prints out the value of the `text` if it is defined, or `Hello World` if it is not defined.',
            ],
        },
    },
    {
        left: {
            title: 'Convert Code',
            description: 'Explain some Code based on the syntax provided',
            placeholder: 'print("Hello World")',
            icon: <MultipleStopIcon className='mui-icon' />
        },
        right: {
            title: 'What does this code do?',
            subtitle: 'The following code does:',
            steps: [
                'The above code is a function definition.',
                'It defines a new function called `Hello World` that takes a single argument called `text`',
                'The body of the function is a single line of code that prints out the value of the `text` if it is defined, or `Hello World` if it is not defined.',
            ],
        },
    },
]