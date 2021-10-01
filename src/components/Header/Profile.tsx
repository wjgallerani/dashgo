import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>William</Text>
                    <Text color="gray.300" fontSize="small">
                        williamglrn@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="William Gallerani" /*src="https://github.com/wjgallerani.png"*/ />

        </Flex>
    );
}