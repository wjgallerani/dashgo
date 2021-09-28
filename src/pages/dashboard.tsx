import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "./Sidebar";
import dynamic from 'next/dynamic';

const Chart = dynamic(() =>
    import('react-apexcharts'), {
    ssr: false //Lado do Browser
});

interface IOptions {
    chart: {
        toolbar: {
            show: boolean;
        };
        zoom: {
            enabled: boolean;
        };
        foreColor: string;
    };
    grid: {
        show: boolean;
    };
    dataLabels: {
        enabled: boolean;
    };
    tooltip: {
        enabled: boolean;
    };
    xaxis: {
        type: any;
        axisBorder: {
            color: string;
        };
        axisTicks: {
            color: string;
        };
        categories: string[];
    };
    fill: {
        opacity: number,
        type: string,
        gradient: {
            shade: string,
            opacityFrom: number,
            opacityTo: number
        }
    };
}

let options: IOptions;

options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-03-01T00:00:00.000Z',
            '2021-03-02T00:00:00.000Z',
            '2021-03-03T00:00:00.000Z',
            '2021-03-04T00:00:00.000Z',
            '2021-03-05T00:00:00.000Z',
            '2021-03-06T00:00:00.000Z',
            '2021-03-07T00:00:00.000Z'
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
};

const series = [
    {
        name: 'series1', data: [31, 12, 10, 28, 51, 18, 5]
    }
];


export default function Dashboard() {
    return (
        <Flex
            direction="column"
            h="100vh"
        >
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" aling="flex-start">
                    <Box p="8" bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="lg" mb="4'">Inscritos da Semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>

                    <Box p="8" bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="lg" mb="4'">Taxa de Abertura</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>

    );
}