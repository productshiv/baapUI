import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  style?: object;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  style,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={handlePrevious} disabled={currentPage === 1} style={styles.button}>
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
      <Text style={styles.pageInfo}>{`Page ${currentPage} of ${totalPages}`}</Text>
      <TouchableOpacity
        onPress={handleNext}
        disabled={currentPage === totalPages}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
  pageInfo: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default Pagination;
